import styles from './Avatar.module.css'
import {ImgHTMLAttributes} from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    src: string;
    alt?: string
}

// O ? indica que a propriedade é opcional

// O componente avatar retorna uma tag html. Da maneira que eu fiz posso usar apenas as props src e alt, mas uma tag
// img possui outras propriedade.
// Eu não preciso passar uma por uma, posso simplesmente extends de ImgHTMLAttributes<HTMLImageElement>

//Nos parâmetros da função abaixo, eu setei por default hasBorder como true e chamei todas as demais props através do operador spread

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {

    // Princípio da desestruturação. Em JS posso desestruturar um objeto e pegar apenas as propriedades que eu quero
    // const {hasBorder, src} = props
    // No caso acima, eu estou pegando as propriedades hasBorder e src do objeto props
    // E aplicando um valor default
    // Então se for passado um valor para a propriedade hasBorder, ele vai ser usado, caso contrário, o valor default será usado

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} //Agora eu chamo todas as demais props através do operador spread
        />
    )
}