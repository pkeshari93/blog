import {css} from 'styled-components'

const sizes = {
    phone: 376,
    tablet: 768,
    desktop: 1500
}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
    return{
        ...finalMedia,
        [size]: function(...args) {
            return css`
                @media(max-width: ${sizes[size]}px){
                ${css(...args)}
                }
            `
        }
    }
}, {})

// function phone(...args) {
//     return css`
//         @media(max-width: ${sizes.phone}px){
//             ${css(...args)}
//         }
//     `
// }

// function tablet(...args) {
//     return css`
//         @media(max-width: ${sizes.tablet}px){
//             ${css(...args)}
//         }
//     `
// }

// function desktop(...args) {
//     return css`
//         @media(max-width: ${sizes.desktop}px){
//             ${css(...args)}
//         }
//     `
// }

// const media = {
//     phone,
//     tablet,
//     desktop
// }
export default media