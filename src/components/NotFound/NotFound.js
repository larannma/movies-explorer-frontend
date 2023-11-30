import './NotFound.css'

function NotFound() {
    return (
        <div className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__subtitle'>Страница не найдена</p>
            <p className='not-found__back'>Назад</p>
        </div>
    )
}

export default NotFound