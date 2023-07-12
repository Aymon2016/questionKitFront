import './index.scss'

const HeroSection = () => {
    return (
        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
            >
                <div id='content'>
                    <div className='d-flex justify-content-center align-items-center h-500'>
                        <div className='text-white'>
                            <h2 className='mb-3'>Question Generaor</h2>
                            <h5 className='mb-3'>Smart School Management System</h5>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Call to Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeroSection