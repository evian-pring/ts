declare module "npmModule" {
    export const Item: {
        price: number,
        name: string
    }
    
    export const MyModuleObject: {
        method: () => Item
    }
}