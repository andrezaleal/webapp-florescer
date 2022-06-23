import React from 'react'
import {
    Layout,
    Typography,
    Image,
    Row,
    Col,
    Button
} from 'antd';
import './styles.css'
import { ArrowRightOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import personagem from "../../../assets/imagem-personagem1.png";

const { Title, Text } = Typography;
const { Content } = Layout;

const Quiz = () => (
    <Layout className="layout">
        <Title className='titulo'>Quiz</Title>
        <Content className="site-layout-content">
            <div>
                <Row className='container_step'>
                    <Row className='container_item'>
                        <Col>
                            <Image
                                src={personagem}
                                preview={false}
                                style={{
                                    width: '20rem',
                                    marginBottom: '1rem'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className='container_step'>
                        <Col>
                            <Text>Olá, eu sou a especialista Flora.</Text>
                        </Col>
                    </Row>
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text>Sei que existem inúmeras espécies de plantas disponíveis para cultivo e por isso pode ser complicado saber quais são as mais apropriadas para o seu perfil.</Text>
                        </Col>
                    </Row>
                    <Row className='container_step' style={{justifyContent:'end'}}>
                        <Col>
                            <Button type='link' style={{color:'#6D7970'}}>
                                Avançar
                                <ArrowRightOutlined />
                            </Button>

                        </Col>
                    </Row>
                </Row>
            </div>
        </Content>


    </Layout >
);


export default Quiz;

