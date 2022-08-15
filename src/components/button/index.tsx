import style from './Button.module.scss';

//Recebendo via props a informação que será passada no button
export default function Button({type, text, onClick}: {
    type?: "button" | "submit" | "reset" | undefined,
    text: string,
    onClick?: () => void
}) {
    return <button type={type} className={style.button} onClick={onClick}>{text}</button>;
}