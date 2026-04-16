export const currencyFormate= (value: number) => {

    return value.toLocaleString('es-Es', {
        style:'currency',
        currency:'MXN',
        minimumFractionDigits:2
    })
}