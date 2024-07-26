import { Card, Row, Col, Carousel } from "react-bootstrap";
import Loading from "../../pages/shared/Loading";
import { useFetchApplicationsById } from "../../hooks/useFetchApplicationsById";
import "./DashboardFreelancer.css"
import { getDaysAgo } from "../../utils/getDaysAgo";


export const DashboardFreelancer = () => {

    const { applications, projects, loading } = useFetchApplicationsById();

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const saldoFreelancer = "USD 800,00";

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const projectChunks = projects ? chunkArray(projects, 3) : [];
    
    return (

        <div className="p-3 mt-5">
            <h3 className='fs-2 mx-3'>Estado de la cuenta</h3>
            <Card className="border border-info rounded-3 align-items-end m-3 p-3 mb-5" >

                <Row>
                    <Col lg={6}>
                        <Card.Title className="fw-bold">Proyectos activos</Card.Title>
                        <Card.Text className=''>{ loading ? 0 : projects.length }</Card.Text>
                    </Col>

                    <Col lg={6}>
                        <Card.Title className='fw-bold'>Saldo disponible</Card.Title>
                        <Card.Text>{saldoFreelancer}</Card.Text>
                    </Col>

                </Row>

            </Card>

            {loading ? (
                <div className="loading"><Loading /></div>
            ) : (
                <>
                <h3 className='fs-2 mx-3'>Mis Postulaciones</h3>
                <div className="d-none d-lg-block">
                    <Carousel className="p-2">
                        {/* carousel lg */}
                        {projectChunks.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <Row>
                            {chunk.map((project, i) => (
                                <Col lg={4} md={12} key={i}>
                                    <Card className="align-items-start m-2 border border-info p-2 rounded-4 card-postulacion card-size">
                                        <Card.Body>
                                            <Card.Title className="fw-bold fs-xl-4">
                                                {project.titulo}
                                            </Card.Title>
                                            <Card.Text className="container-text my-3">
                                                {project.descripcion}
                                            </Card.Text>
                                        </Card.Body>
                                        <Col className="w-100 px-3">
                                            <Row className="w-100 justify-content-center">
                                                <Col lg={12} xl={6}>
                                                    <Card.Title className="fw-bold">
                                                        Estado
                                                    </Card.Title>
                                                </Col>
                                                <Col lg={12} xl={6}>
                                                    <Card.Text>
                                                        {stateProjectParse(project.estado)}
                                                    </Card.Text>
                                                </Col>
                                            </Row>

                                            <Row className="w-100">
                                                <Col lg={12} xl={6}>
                                                    <Card.Title className="fw-bold">
                                                        Tipo de precio
                                                    </Card.Title>
                                                </Col>
                                                <Col lg={12} xl={6}>
                                                    <Card.Text>
                                                        Fijo
                                                    </Card.Text>
                                                </Col>
                                            </Row>

                                            <Row className="w-100">
                                                <Col lg={12} xl={6}>
                                                    <Card.Title className="fw-bold">
                                                        Publicado
                                                    </Card.Title>
                                                </Col>
                                                <Col lg={12} xl={6}>
                                                    <Card.Text>
                                                    {getDaysAgo(project.fechaCreacion)}
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Card>
                                </Col>
                            ))}
                            </Row>
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="d-block d-lg-none">
                    <Carousel className="p-2">
                        {/* carousel md */}
                        {projects.map((p) => (
                            <Carousel.Item key={p.id}>
                                    <Col lg={4}>
                                        <Card className="align-items-start m-2 border border-info p-2 rounded-4 card-postulacion card-size-movil">
                                            <Card.Body>
                                                <Card.Title className="fw-bold fs-4">
                                                    {p.titulo}
                                                </Card.Title>
                                                <Card.Text className="container-text-movil my-3">
                                                    {p.descripcion}
                                                </Card.Text>
                                            </Card.Body>
                                            <Col className="w-100 px-3">
                                                <Row className="w-100 justify-content-center">
                                                    <Col xs={6}>
                                                        <Card.Title className="fw-bold">
                                                            Estado
                                                        </Card.Title>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Text>
                                                            {stateProjectParse(p.estado)}
                                                        </Card.Text>
                                                    </Col>
                                                </Row>

                                                <Row className="w-100">
                                                    <Col xs={6}>
                                                        <Card.Title className="fw-bold">
                                                            Tipo de precio
                                                        </Card.Title>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Text>
                                                            Fijo
                                                        </Card.Text>
                                                    </Col>
                                                </Row>

                                                <Row className="w-100">
                                                    <Col xs={6}>
                                                        <Card.Title className="fw-bold">
                                                            Publicado
                                                        </Card.Title>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Text>
                                                            {getDaysAgo(p.fechaCreacion)}
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Card>
                                    </Col>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>                            
                </>
            )}
        </div>
    );
};

export default DashboardFreelancer;