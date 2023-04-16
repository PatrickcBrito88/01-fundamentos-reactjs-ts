import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src}) {

    // Princípio da desestruturação. Em JS posso desestruturar um objeto e pegar apenas as propriedades que eu quero
    // const {hasBorder, src} = props
    // No caso acima, eu estou pegando as propriedades hasBorder e src do objeto props
    // E aplicando um valor default
    // Então se for passado um valor para a propriedade hasBorder, ele vai ser usado, caso contrário, o valor default será usado

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}