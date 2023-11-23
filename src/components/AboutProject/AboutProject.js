import './AboutProject.css'

function AboutProject() {
  return (
    <div className="aboutProject root__section">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__stages">
        <div className="aboutProject__stage">
          <p className="aboutProject__stageTitle">Дипломный проект включал 5 этапов</p>
          <p className="aboutProject__stageSubtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__stage">
          <p className="aboutProject__stageTitle">На выполнение диплома ушло 5 недель</p>
          <p className="aboutProject__stageSubtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__timeline">
        <div className="aboutProject__backend"><p className='aboutProject__length'>1 неделя</p></div>
        <div className="aboutProject__frontend"><p className='aboutProject__length'>4 недели</p></div>
      </div>
      <div className="aboutProject__timeline">
        <div className="aboutProject__backend aboutProject__backend_blank"><p className='aboutProject__length aboutProject__length_blank'>Back-end</p></div>
        <div className="aboutProject__frontend aboutProject__backend_blank"><p className='aboutProject__length aboutProject__length_blank'>Front-end</p></div>
      </div>
    </div>
  )
}

export default AboutProject