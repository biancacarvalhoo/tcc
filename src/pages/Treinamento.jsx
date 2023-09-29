import "./Treinamento.css"

function Treinamento() {
    return (
        <section class="treinamento">
            <div class="vibracao">
                <h1>1 Vibração</h1>
                <button>
                <Link to={"/Home"}>Voltar</Link>
                <img src="./img/voltar-login.svg" alt="" />
                </button>
  
                <div class="vibracao-content">
                    <div class="img-vibracao">
                        <img src="./img/vibracao.svg" alt="" />
                    </div>
                    <div class="text-vibracao">
                        <p>Ao identificar o obstáculo, o dispositivo emite alertas vibratórios que se intensificam a medida que o cãozinho se aproxima. <br /> <br />
                            Conte-nos a distância entre o pescoço e a ponta do focinho do seu cão. Essa diferenciação é feita para que a coleira não vibre a distâncias muito curtas, em situações como dormir ou comer. Ela só vai vibrar quando for pra evitar que ele sofra a batida.</p>

                    </div>
                </div>
            </div>

            <div class="atencao">
                <h1>2 Atencão</h1>
                <div class="atencao-content">
                    <div class="text-atencao">
                        <p>O cão percebe o novo estímulo e tenta entender o significado. <br /><br />Nessa etapa é interessante que você observe o comportamento dele com o dispositivo, estimule seu bichinho com reforços positivos, dizendo palavras de incentivo ou petiscos.</p>
                    </div>
                    <div class="img-atencao">
                        <img src="./img/atencao.svg" alt="" />
                    </div>
                </div>
            </div>

            <div class="associacao">
                <h1>3 Associação</h1>
                <div class="associacao-content">
                    <div class="img-associacao">
                        <img src="./img/associacao.svg" alt="" />
                    </div>
                    <div class="text-associacao">
                        <p>O cão associa a vibração aos obstáculos e passa a desviar, evitando choques e<br /> traumas.<br />
                            A adaptação varia de cão para cão,</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Treinamento