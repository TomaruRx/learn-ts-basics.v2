// export function isValidPriority(value: number): boolean{
//     // if (!Number.isInteger(value)){
//     //     return false;
//     // }
//     // return value >= 1 && value <= 3;
//     return Number.isInteger(value) && value >= 1 && value <= 3;
// }

// アロー関数版
export const isValidPriority = (value: number): boolean => {
    return Number.isInteger(value) && value >= 1 && value <= 3;
};