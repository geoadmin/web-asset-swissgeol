import * as C from 'io-ts/Codec';

import { CT } from '@asset-sg/core';

import { AssetContactEdit } from './asset-edit';
import { AssetUsage } from './asset-usage';
import { DateId } from './DateStruct';

export const PatchAsset = C.struct({
    titlePublic: C.string,
    titleOriginal: C.string,
    createDate: DateId,
    receiptDate: DateId,
    publicUse: AssetUsage,
    internalUse: AssetUsage,
    assetKindItemCode: C.string,
    assetFormatItemCode: C.string,
    languageItemCode: C.string,
    isNatRel: C.boolean,
    manCatLabelRefs: C.array(C.string),
    typeNatRels: C.array(C.string),
    assetContacts: C.array(AssetContactEdit),
    ids: C.array(
        C.struct({
            idId: CT.optionFromNullable(C.number),
            id: C.string,
            description: C.string,
        }),
    ),
    studies: C.array(
        C.struct({
            studyId: C.string,
            geomText: C.string,
        }),
    ),
    assetMainId: CT.optionFromNullable(C.number),
    siblingAssetIds: C.array(C.number),
    newStudies: C.array(C.string),
    newStatusWorkItemCode: CT.optionFromNullable(C.string),
});
export interface PatchAsset extends C.TypeOf<typeof PatchAsset> {}
