import HeaderImg from'../assets/quiz-logo.png'
export default  function Header(){
    return(
        <header>
        <img  src={HeaderImg} alt='quiz-img'/>
        <h1>React quiz</h1>
        </header>
    )
}