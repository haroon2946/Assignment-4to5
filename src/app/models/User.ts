export interface UserObject {
    heading: string | TrustedHTML;
    name: string;
    picture: string;
    about: string;
    skills: Array<string>;
}