export interface Props {
    value: boolean;
    width: string;
    maxWidth: string;
    dialogClass: string | string[] | object;
    overlayClass: string | string[] | object;
    contentClass: string | string[] | object;
}

export interface Data {
    show: boolean;
}

export interface Computed {
    dialog: boolean;
}
