import './Techs.css'
function Techs() {
    return (
        <div className='root__section techs'>
            <div className='techs__container'>
                <div className='techs__title'>Технологии</div>
                <div className='techs__info'>
                    <h2 className='techs__infoTitle'>7 технологий</h2>
                    <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <div className='techs__stack'>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>HTML</p>
                        </div>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>CSS</p>
                        </div>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>JS</p>
                        </div>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>React</p>
                        </div>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>Git</p>
                        </div>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>Express.js</p>
                        </div>
                        <div className='techs__elem'>
                            <p className='techs__elemTitle'>mongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs