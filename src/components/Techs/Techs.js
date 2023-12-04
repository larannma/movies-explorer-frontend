import './Techs.css'
function Techs() {
    return (
        <section className='root__section techs'>
            <div className='techs__container'>
                <h2 className='techs__title'>Технологии</h2>
                <div className='techs__info'>
                    <h3 className='techs__infoTitle'>7 технологий</h3>
                    <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className='techs__stack'>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>HTML</p>
                        </li>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>CSS</p>
                        </li>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>JS</p>
                        </li>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>React</p>
                        </li>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>Git</p>
                        </li>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>Express.js</p>
                        </li>
                        <li className='techs__elem'>
                            <p className='techs__elemTitle'>mongoDB</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Techs