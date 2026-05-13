export interface Theme {
    appBackground: string
    appColor: string
    appDfaultStroke: string
    appLogo: string
    appSkaeletonFrom: string
    appSkaeletonTo: string
    buttons: {
        alert:string
        alertColor: string
        alertHover: string
        disabled: string
        disabledColor: string
        primary:string
        primaryColor: string
        primaryHouver: string
    }
    card: {
        alert: string
        background: string
        border: string
        success: stringwarning
        warning: string
    }
    textinput: {
        active: string
        activeColor: string
        borderColor: string
        disable: string
        disbledBorderColor: string
        disabledColor: string
        placeholderColor: string
    }
    typographies: {
        error: string
        subtitle: string
        success: string
    }
}