export interface User {
    uid: number;
    email: string;
    displayName: string;
    emailVerified: boolean;
    photoURL?: string;
    providerId?: string;
    isAnonymous?: boolean;
}