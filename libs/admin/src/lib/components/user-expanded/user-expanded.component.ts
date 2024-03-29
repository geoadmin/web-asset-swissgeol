import { Dialog, DialogRef } from '@angular/cdk/dialog';
import {
    Component,
    EventEmitter,
    Input,
    Output,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
    inject,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { makeADT, ofType } from '@morphic-ts/adt';
import * as O from 'fp-ts/Option';

import { ButtonComponent, ViewChildMarker } from '@asset-sg/client-shared';
import { User, UserRoleEnum, UserWithoutId } from '@asset-sg/shared';

interface UserCreated extends UserWithoutId {
    _tag: 'userCreated';
}

interface UserEdited extends User {
    _tag: 'userEdited';
}

interface UserDelete extends User {
    _tag: 'userDelete';
}

interface UserExpandCanceled {
    _tag: 'userExpandCanceled';
}

export const UserExpandedOutput = makeADT('_tag')({
    userCreated: ofType<UserCreated>(),
    userEdited: ofType<UserEdited>(),
    userExpandCanceled: ofType<UserExpandCanceled>(),
    userDelete: ofType<UserDelete>(),
});

export type UserExpandedOutput = UserCreated | UserEdited | UserDelete | UserExpandCanceled;

@Component({
    selector: 'asset-sg-user-expanded',
    templateUrl: './user-expanded.component.html',
    styleUrls: ['./user-expanded.component.scss'],
})
export class UserExpandedComponent {
    @ViewChild('deleteDialog') deleteDialog!: TemplateRef<unknown>;
    @ViewChildren(ViewChildMarker) viewChildMarkers!: QueryList<ViewChildMarker>;

    @Output()
    public userExpandedOutput = new EventEmitter<UserExpandedOutput>();
    private _dialog = inject(Dialog);

    private _formBulder = inject(FormBuilder);
    public editForm = this._formBulder.group({
        email: new FormControl(''),
        role: new FormControl<UserRoleEnum>(UserRoleEnum.viewer),
        lang: new FormControl('de'),
    });
    public UserRole = UserRoleEnum;

    private _dialogRef: O.Option<DialogRef> = O.none;

    @Input()
    public get user(): User | undefined {
        return this._user;
    }
    public set user(value: User | undefined) {
        this._user = value;
        if (value) {
            this.editForm.patchValue({
                email: value.email,
                role: value.role,
                lang: value.lang,
            });
        }
    }
    private _user?: User | undefined;

    disableEverything() {
        this.editForm.disable();
        this.viewChildMarkers.forEach(marker => {
            if (marker.viewChildMarker instanceof ButtonComponent) {
                marker.viewChildMarker.disabled = true;
            }
        });
    }
    submit() {
        this.disableEverything();
        if (this.user) {
            const { role, lang } = this.editForm.getRawValue();

            if (!role || !lang) return;

            this.userExpandedOutput.emit(UserExpandedOutput.of.userEdited({ ...this.user, role, lang }));
        } else {
            const { email, role, lang } = this.editForm.getRawValue();
            if (!email || !role || !lang) return;
            this.userExpandedOutput.emit(UserExpandedOutput.of.userCreated({ email, role, lang }));
        }
    }

    cancel() {
        this.userExpandedOutput.emit(UserExpandedOutput.of.userExpandCanceled({}));
    }

    delete() {
        this._dialogRef = O.some(this._dialog.open(this.deleteDialog));
    }

    deleteCancelled() {
        if (O.isSome(this._dialogRef)) {
            this._dialogRef.value.close();
        }
    }

    deleteConfirmed() {
        this.disableEverything();
        if (O.isSome(this._dialogRef)) {
            this._dialogRef.value.close();
        }
        if (this.user) {
            this.user && this.userExpandedOutput.emit(UserExpandedOutput.of.userDelete(this.user));
        }
    }
}
