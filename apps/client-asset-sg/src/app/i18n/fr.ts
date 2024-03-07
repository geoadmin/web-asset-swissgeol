import { AppTranslations } from './i18n';

export const frAppTranslations: AppTranslations = {
    logoSwissGeol: 'Logo swissgeol',
    ok: 'OK',
    submit: 'Envoyer',
    cancel: 'Annuler',
    logout: 'Déconnecter',
    yes: 'Oui',
    no: 'Non',
    add: 'Ajouter',
    save: 'Enregistrer',
    required: 'Nécessaire',
    labelEdit: 'Éditer',
    delete: 'Supprimer',
    close: 'Fermer',
    datePlaceholder: 'AAAA-MM-JJ',
    menuBar: {
        assets: 'Assets',
        admin: 'Administration',
        favourites: 'Favoris',
        help: 'Aide',
        profile: 'Profil',
        settings: 'Paramètres',
        signOut: 'Fermer',
        userManagement: 'Gestion des utilisateurs',
    },
    map: {
        zoomIn: 'Zoom avant',
        zoomOut: 'Zoom arrière',
        zoomToOrigin: "Zoom sur la position d'origine",
        drawingModeOn: 'Mode de dessin activé',
        drawingModeOff: 'Mode de dessin désactivé',
        dragHandleLabel: 'Poignée de tirage',
    },
    auth: {
        signInHeading: 'Inscription à assets.swissgeol',
        email: 'E-Mail',
        password: 'Mot de passe',
        signIn: 'Inscrire',
        forgotPassword: 'Oublié le mot de passe ?',
        invalidCredentials: 'Données de connexion non valables',
        error: {
            required: 'Ce champ est obligatoire',
            email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        },
        recovery: {
            enterEmail:
                'Saisissez votre adresse e-mail et un lien pour réinitialiser votre mot de passe vous sera envoyé par e-mail.',
            backToLogin: "Retour à l'inscription",
            tooManyRequests:
                "Pour des raisons de sécurité, vous ne pouvez en faire la demande qu'une fois toutes les 60 secondes.",
            recoverySuccess:
                'Veuillez cliquer sur le lien que vous avez reçu par e-mail pour réinitialiser votre mot de passe.',
        },
        reset: {
            welcome: 'Créer un nouveau mot de passe',
            enterPassword: 'Veuillez saisir un mot de passe.',
            unauthorised: 'Non autorisé',
            invalidEmailLink: "Le lien e-mail n'est pas valide ou a expiré.",
        },
        set: {
            welcome: 'Bienvenue sur asset.swissgeol',
            enterPassword: "Veuillez saisir un mot de passe pour terminer l'enregistrement.",
        },
    },
    userManagement: {
        createNewUser: 'Créer un nouvel utilisateur',
        confirmDelete: " Voulez-vous vraiment supprimer l'utilisateur suivant ?",
    },
    search: {
        textSearchFieldPlaceholder: 'Recherche par titre original ou public et auteur ou déposant',
        searchInstructionsHeading: "Recherche d'assets",
        searchInstructions: "Recherche d'un asset via le champ de recherche ou en dessinant un polygone sur la carte.",
        closeInstructions: "Fermer le mode d'emploi",
        searchControl: 'Commande de recherche',
        refineSearch: 'Affiner la recherche',
        searchResults: 'Résultats de recherche',
        author: 'Auteurr',
        documentDate: 'Date du document',
        usage: 'Utilisation',
        detailedInformation: 'Informations détaillées',
        originalTitle: 'Titre original',
        kind: 'Type',
        topic: 'Thème',
        language: 'Langue',
        format: 'Format',
        createdDate: 'Date de création',
        lastProcessedDate: 'Dernière mise à jour',
        alternativeId: 'ID alternative',
        contacts: 'Contacts',
        subject: 'Sujet',
        content: 'Contenu',
        nationalInterest: 'Intérêt national',
        reference: 'Référence',
        status: 'Statut',
        closeAssetDetails: 'Fermer informations détaillées',
        usageCode: {
            public: 'Utilisation publique',
            internal: 'Utilisation interne',
            useOnRequest: 'Utilisation sur demande',
        },
        geometry: 'Géométrie',
        geometryCode: {
            Point: 'Point',
            LineString: 'Ligne',
            Polygon: 'Polygone',
            None: 'Aucune',
        },
        resetSearch: 'Réinitialiser la recherche',
        file: 'Fichier',
        openFileInNewTab: 'Ouvrir {{fileName}} dans un nouvel onglet',
        downloadFile: 'Télécharger {{fileName}}',
        assetsUnderMouseCursor:
            '{{ assetsCount }} ssets trouvés sous le curseur de la souris. Veuillez en sélectionner un :',
        removePolygon: 'Annuler le polygone',
    },
    contactRoles: {
        author: 'Auteur',
        initiator: 'Client',
        supplier: 'Fournisseur',
    },
    edit: {
        tabs: {
            general: {
                tabName: 'Général',
                kind: 'Type',
                language: 'Langue',
                format: 'Format',
                topic: 'Thème',
                topics: 'Thèmes',
                title: 'Titre',
                publicTitle: 'Titre public',
                originalTitle: 'Titre original',
                sgsId: 'SGS-ID',
                date: 'Date',
                creationDate: 'Date de création',
                dateReceived: 'Date de réception',
                type: 'Type',
                alternativeId: 'ID alternative',
                alternativeIdDescription: "Description d'ID alternative",
                addNewAlternativeId: 'Ajouter une nouvelle ID alternative',
                files: 'Fichiers',
                dragFileHere: 'Glisser le fichier ici',
                or: 'ou',
                selectFile: 'Sélectionner un fichier',
                addNewFile: 'Ajouter un nouveau fichier',
                willBeDeleted: 'Sera supprimé',
                willBeUploaded: 'Sera téléchargé',
                fileSizeToLarge: 'La taille du fichier ne doit pas dépasser 250 Mo.',
            },
            usage: {
                tabName: 'Utilisation',
                internalUsageReason: "L'utilisation interne est activée parce que l'utilisation externe a été activée.",
                internalUsage: 'Utilisation interne',
                externalUsage: 'Utilisation publique',
                status: 'Status',
                expirationDate: "Date d'expiration",
                nationalInterest: 'Intérêt national',
                typeNationalInterest: "Type d'intérêt national",
                type: 'Type',
                types: 'Types',
                noTypesAssigned: 'Aucun type attribué',
                questionDeleteNationalInterest: 'Vous souhaitez continuer et supprimer les entrées ?',
                validationErrors: {
                    internalPublicUsageDateError:
                        "La date d'expiration interne doit être plus proche ou identique à celle de l'utilisation public",
                },
            },
            contacts: {
                tabName: 'Contact',
                linkContact: 'Ajouter un nouveau lien de contact',
                link: 'Créer un lien',
                createNewContact: 'Créer un nouveau contact',
                editContact: 'Modifier le contact',
                unlink: 'Supprimer le lien',
                viewDetails: 'Afficher les détails du contact',
                contact: 'Contact',
                role: 'Rôle',
                newContact: 'Nouveau contact',
                contactKind: 'Type de contact',
                name: 'Nom',
                street: 'Rue',
                number: 'Nummeo',
                postCode: 'CODE POSTAL',
                locality: 'Lieu',
                country: 'Pays',
                email: 'E-Mail',
                phone: 'Téléphone',
                website: 'Site web',
                create: 'Créer',
                noContacts: 'Aucun contact',
            },
            references: {
                tabName: 'Références',
                assetTitlePublic: 'Titre public',
                assetTitlePublicPlaceholder: 'Recherche par titre public',
                referenceHeadings: {
                    parent: 'Asset parent',
                    subordinate: 'Assets parents',
                    sibling: 'Assets de la fratrie',
                    newReference: 'Nouvelle référence',
                },
                referenceType: {
                    parent: 'Supérieur',
                    subordinate: 'Subordonné',
                    sibling: 'Frères et sœurs',
                },
            },
            geometries: {
                tabName: 'Géométries',
                geometry: 'Géométrie',
                noGeometries: 'Aucune géométrie',
                geometryType: 'Type de géométrie',
                selectGeometryLabel: 'Choisissez parmi {{count}} géométries',
                geometryLineString: 'Ligne',
                geometryPolygon: 'Polygone',
                geometryPoint: 'Point',
                geometryMenu: {
                    buttonLabel: 'Menu de géométrie',
                    new: 'Saisir une nouvelle géométrie',
                    remove: 'Supprimer la géométrie',
                },
                vertexMenu: {
                    buttonLabel: "Menu pour point d'angle {{index}}",
                    add: "Ajouter point d'angle à",
                    remove: "Supprimer point d'angle",
                },
                instructionsPoint: 'Ajustez les coordonnées du nouveau point',
                instructionsPolygonOrLIne: 'Dessinez au moins {{ count }} points',
                instructionsMorePolygonOrLIne: 'Dessinez au moins {{ count }} autres points',
                createGeometry: 'Créer la géométrie',
            },
            administration: {
                tabName: 'Administration',
                infoGeol: 'InfoGeol',
                sgsId: 'SGS-ID',
                data: 'Données',
                contactData: 'Données de contact',
                auxData: 'Données supplémentaires',
                municipality: 'Commune',
                workStatus: 'Statut de travail',
                lastProcessed: 'Dernière mise à jour',
                by: 'de',
                addWorkStatus: 'Ajouter un statut de travail',
                tabValidationErrors: {
                    tab: 'Onglet',
                    hasValidationErrors: 'Contient des erreurs de validation',
                },
            },
        },
        closeManageAsset: 'Fermer la gestion des asset',
        questionDiscardChanges: 'Souhaitez-vous annuler les modifications ?',
        adminInstructionsEditHeading: 'Gérer des assets',
        adminInstructionsEdit: 'Recherche un asset via le menu Assets pour le gérer.',
        adminInstructionsCreateHeading: 'Nouvel asset',
        adminInstructionsCreate: 'Créer un nouvel asset',
    },
};
