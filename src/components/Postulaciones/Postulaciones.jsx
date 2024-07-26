import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from "react-bootstrap"
import Loading from "../../pages/shared/Loading";
import './Postulaciones.css';
import { useFetchApplicationsById } from "../../hooks/useFetchApplicationsById";


export const Postulaciones = () => {

    const { applications, projects, loading } = useFetchApplicationsById();

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    }

    const tipoPrecio = "Fijo";

    return (
        <>
            {
                loading ? (
                    <div className="loading" > <Loading /></div >
                ) :
                    projects.map((project) => (
                        <div key={project.id}>

                            <Card className="align-items-start m-3 border border-info p-2 m-1 rounded-4 pt-4 card-postulacion">

                                <Card.Body className="pt-0">
                                    <Row className="">
                                        <Row>
                                            <Card.Title className="fw-bold">{project.titulo}</Card.Title>
                                        </Row>

                                        <Row>
                                            <Card.Text className="pt-3">{project.descripcion}</Card.Text>
                                        </Row>

                                        <Row className="pt-3">

                                            <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={3}>
                                                <Row className="text-center px-1">
                                                    <Col className="p-0 m-1">
                                                        <Card.Title className="fw-bold p-1 m-1 text-end">
                                                            Estado
                                                        </Card.Title>
                                                    </Col>
                                                    <Col className="p-0 m-1 rounded-4">
                                                        <Card.Text className="p-1 m-1 text-start">
                                                            {stateProjectParse(project.estado)}
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={3}>
                                                <Row className="text-center px-1">
                                                    <Col className="p-0 m-1">
                                                        <Card.Title className="fw-bold p-1 m-1 text-end">
                                                            Publicado
                                                        </Card.Title>
                                                    </Col>
                                                    <Col className="p-0 m-1 rounded-4">
                                                        <Card.Text className="p-1 m-1 text-start">
                                                            {firstToUpperCase(project.modalidad)}
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={3}>
                                                <Row className="text-center px-1">
                                                    <Col className="p-0 m-1">
                                                        <Card.Title className="fw-bold p-1 m-1 text-end">
                                                            Tipo de precio
                                                        </Card.Title>
                                                    </Col>
                                                    <Col className="p-0 m-1 rounded-4">
                                                        <Card.Text className="p-1 m-1 text-start">
                                                            {tipoPrecio}
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                )
            }
        </>
    );
};

export default Postulaciones;