import React from 'react';
import './user-home-styles.css'


export const UserHome = () => {
    return (
        <main className="w-100 p-0 m-0">
            <div className="container w-75 mx-auto py-4">
                <h2 className="text-primary text-center fw-bold">Sistema experto</h2>
                <section className=" mt-3 d-flex flex-wrap mx-auto  justify-content-around">
                    <article className="col-5 border-primary p-2">
                        <h4 className="text-primary text-center fw-bold">Descripción</h4>
                        <p className="text-lg-center">
                            Un sistema experto es un sistema capaz de resolver problemas de un dominio muy específico
                            intentando alcanzar el rendimiento de un experto en el área en específico en este caso la
                            psicología para poder apoyar en el diagnostico de problemas emocionales.
                            Mediante el
                        </p>
                        <div className="container w-75 mx-auto">
                            <img src="/images/Descripcion.png" alt="" className="d-block w-100"/>
                        </div>
                    </article>
                    <article className="col-5 border-primary p-2">
                        <h4 className="text-primary text-center fw-bold">Objetivo</h4>
                        <p className="text-lg-center">
                            El objetivo del sistema experto es apoyar en el diagnóstico temprano de ansiedad y
                            depresión en jóvenes universitarios de la UPIICSA derivados del confinamiento de la
                            COVID-19; Almacenar los resultados y que de esta forma se pueda brindar la atención pertinente.
                        </p>
                        <div className="container w-75 mx-auto">
                            <img src="/images/objetivo.jpg" alt="" className="d-block w-100"/>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};