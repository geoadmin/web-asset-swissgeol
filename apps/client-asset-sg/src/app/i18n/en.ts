import { AppTranslations } from './i18n';

export const enAppTranslations: AppTranslations = {
    logoSwissConfederation: 'Logo Swiss Confederation',
    ok: 'OK',
    submit: 'Submit',
    cancel: 'Cancel',
    logout: 'Logout',
    yes: 'Yes',
    no: 'No',
    add: 'Add',
    save: 'Save',
    required: 'Required',
    labelEdit: 'Edit',
    delete: 'Delete',
    close: 'Close',
    datePlaceholder: 'YYYY-MM-DD',
    menuBar: {
        assets: 'Assets',
        admin: 'Administration',
        favourites: 'Favourites',
        help: 'Help',
        profile: 'Profile',
        settings: 'Settings',
        signOut: 'Close',
        userManagement: 'User Management',
    },
    map: {
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
        zoomToOrigin: 'Zoom to origin',
        drawingModeOn: 'Drawing mode is off. Click to turn on drawing mode',
        drawingModeOff: 'Drawing mode is on. Click to turn off drawing mode',
        dragHandleLabel: 'Drag handle',
    },
    auth: {
        signInHeading: 'Sign in to Swissgeol Asset',
        email: 'E-Mail',
        password: 'Password',
        signIn: 'Sign in',
        forgotPassword: 'Forgot password?',
        invalidCredentials: 'Invalid credentials',
        error: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
        },
        recovery: {
            enterEmail: 'Enter your email and a password reset link will be emailed to you.',
            backToLogin: 'Back to login',
            tooManyRequests: 'For security purposes, you can only request this once every 60 seconds',
            recoverySuccess: 'Please click on the link email to you to reset your password.',
        },
        reset: {
            welcome: 'Create a new password',
            enterPassword: 'Please set enter a new password',
            unauthorised: 'Unauthorised',
            invalidEmailLink: 'Email link is invalid or expired.',
        },
        set: {
            welcome: 'Welcome to Swissgeol Asset',
            enterPassword: 'Please set a password to complete the registration.',
        },
    },
    userManagement: {
        createNewUser: 'Create new user',
        confirmDelete: 'Are you sure you want to delete the following user?',
    },
    search: {
        textSearchFieldPlaceholder: 'Search by original or public title and author or consignor',
        searchInstructionsHeading: 'Asset-Search',
        searchInstructions: 'Search for an asset using the search field or by drawing a ploygon on the map.',
        closeInstructions: 'Close instructions',
        searchControl: 'Search control',
        refineSearch: 'Refine search',
        searchResults: 'Search results',
        author: 'Author',
        documentDate: 'Document date',
        usage: 'Usage',
        detailedInformation: 'Detailed informationen',
        originalTitle: 'Original title',
        kind: 'Kind',
        topic: 'Topic',
        language: 'Language',
        format: 'Format',
        createdDate: 'Date created',
        lastProcessedDate: 'Last update',
        alternativeId: 'Alternative ID',
        contacts: 'Contacts',
        subject: 'Subject',
        content: 'Content',
        nationalInterest: 'Nat. Interest',
        reference: 'Reference',
        status: 'Status',
        closeAssetDetails: 'Close asset details',
        usageCode: {
            public: 'Public use',
            internal: 'Internal use',
            useOnRequest: 'Use on request',
        },
        geometry: 'Geometry',
        geometryCode: {
            Point: 'Point',
            LineString: 'Line',
            Polygon: 'Polygon',
            None: 'None',
        },
        resetSearch: 'Reset search',
        file: 'File',
        openFileInNewTab: 'Open {{fileName}} in new tab',
        downloadFile: 'Download {{fileName}}',
        assetsUnderMouseCursor: '{{ assetsCount }} assets found under the mouse cursor. Please select one:',
        removePolygon: 'Remove polygon',
    },
    contactRoles: {
        author: 'Author',
        initiator: 'Client',
        supplier: 'Supplier',
    },
    edit: {
        tabs: {
            general: {
                tabName: 'General',
                kind: 'Kind',
                language: 'Language',
                format: 'Format',
                topic: 'Topic',
                topics: 'Topics',
                title: 'Title',
                publicTitle: 'Public title',
                originalTitle: 'Original title',
                sgsId: 'SGS ID',
                date: 'Date',
                creationDate: 'Creation date',
                dateReceived: 'Receipt date',
                type: 'Type',
                alternativeId: 'Alternative ID',
                alternativeIdDescription: 'Alternative ID Description',
                addNewAlternativeId: 'Add new alternative ID',
                files: 'Files',
                dragFileHere: 'Drag file here',
                or: 'or',
                selectFile: 'Select file',
                addNewFile: 'Add new file',
                willBeDeleted: 'Will be deleted',
                willBeUploaded: 'Will be uploaded',
                fileSizeToLarge: 'File size may not exceed 250MB',
            },
            usage: {
                tabName: 'Usage',
                internalUsageReason: 'Internal use is switched on because external use has been switched on.',
                internalUsage: 'Internal usage',
                externalUsage: 'External usage',
                status: 'Status',
                expirationDate: 'Expiration date',
                nationalInterest: 'National interest',
                typeNationalInterest: 'Type of national interest',
                type: 'Type',
                types: 'Types',
                noTypesAssigned: 'No types assigned',
                questionDeleteNationalInterest: 'Do you want to go ahead and delete the entries?',
                validationErrors: {
                    internalPublicUsageDateError:
                        'The internal expiry date must be closer or the same as that of the external use',
                },
            },
            contacts: {
                tabName: 'Contacts',
                linkContact: 'Add new Contact-Link',
                link: 'Link',
                unlink: 'Unlink contact',
                viewDetails: 'Show contact details',
                createNewContact: 'Create new contact',
                editContact: 'Edit contact',
                contact: 'Contact',
                role: 'Role',
                newContact: 'New Contact',
                contactKind: 'Contact kind',
                name: 'Name',
                street: 'Street',
                number: 'Number',
                postCode: 'Post code',
                locality: 'Locality',
                country: 'Country',
                email: 'Email',
                phone: 'Telephone',
                website: 'Website',
                create: 'Create',
                noContacts: 'No contacts',
            },
            references: {
                tabName: 'References',
                assetTitlePublic: 'Public title',
                assetTitlePublicPlaceholder: 'Search via public title',
                referenceHeadings: {
                    parent: 'Main asset',
                    subordinate: 'Subordinate assets',
                    sibling: 'Sibling assets',
                    newReference: 'New reference',
                },
                referenceType: {
                    parent: 'Main',
                    subordinate: 'Subordinate',
                    sibling: 'Sibling',
                },
            },
            geometries: {
                geometry: 'Geometry',
                tabName: 'Geometries',
                noGeometries: 'No geometries',
                geometryType: 'Geometry type',
                selectGeometryLabel: 'Select from {{count}} geometries',
                geometryLineString: 'Line/Trace',
                geometryPolygon: 'Polygon',
                geometryPoint: 'Point',
                geometryMenu: {
                    buttonLabel: 'Menu for geometry',
                    new: 'Create a new geometry',
                    remove: 'Delete geometry',
                },
                vertexMenu: {
                    buttonLabel: 'Menu for vertex {{index}}',
                    add: 'Add vertex after',
                    remove: 'Remove vertex',
                },
                instructionsPoint: 'Adjust the coordinates of the new point',
                instructionsPolygonOrLIne: 'Draw at least {{ count }} points',
                instructionsMorePolygonOrLIne: 'Draw at least {{ count }} more points',
                createGeometry: 'Create geometry',
            },
            administration: {
                tabName: 'Administration',
                infoGeol: 'InfoGeol',
                sgsId: 'SGS ID',
                data: 'Data',
                contactData: 'Contact data',
                auxData: 'Auxiliary data',
                municipality: 'Municipality',
                workStatus: 'Work status',
                lastProcessed: 'Last processed',
                by: 'By',
                addWorkStatus: 'Add work status',
                tabValidationErrors: {
                    tab: 'Tab',
                    hasValidationErrors: 'has validation errors',
                },
            },
        },
        closeManageAsset: 'Close manage asset',
        questionDiscardChanges: 'Do you want to discard your changes?',
        adminInstructionsEditHeading: 'Manage asset',
        adminInstructionsEdit: 'Search for an Asset via the Assets menu, in order to manage it.',
        adminInstructionsCreateHeading: 'New asset',
        adminInstructionsCreate: 'Create new asset',
    },
};