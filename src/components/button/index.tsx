import style from './Button.module.scss';

//Recebendo via props a informação que será passada no button
export default function Button({type, text}: {
    type?: "button" | "submit" | "reset" | undefined,
    text: string
}) {
    return <button type={type}className={style.button}>{text}</button>;
}