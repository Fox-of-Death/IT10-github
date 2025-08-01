import React from 'react'

const Home = () => {
    return (
        <>
            <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/v2/C561BAQFKX-ZcB8IZfQ/company-background_1536_768/company-background_1536_768/0/1583915959427?e=2147483647&v=beta&t=JTQ8OyTvQbIUKlyn9I9dB_03cIlHK2wK9_QR9xNAj1A)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-blue-950'>NVC Training Center</h2>
                    <p className='text-black mb-6 text-lg font-semibold'>Here We go again?</p>
                </div>
            </section>
        </>
    )
}

export default Home