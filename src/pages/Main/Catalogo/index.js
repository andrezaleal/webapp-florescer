import React from 'react'
import {
    Layout,
    Typography,
    Input,
    Row,
    Col,
    Button,
    Image,
    Card
} from 'antd';
import { useHistory, Link } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import favoritas from "../../../assets/favoritas.png";
import AZ from "../../../assets/AZ.png";
import facil from "../../../assets/facilcuidado.png";
import grandes from "../../../assets/grandes.png";
import "antd/dist/antd.css";
import MenuComponent from '../../../components/MenuComponent';

const { Title, Text } = Typography;
const { Content } = Layout;

const Catalogo = () => {
    const history = useHistory();
    return (
        <Layout className="layout" >
            <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
                <Col>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                </Col>
            </Row>
            <Title className='titulo'>Catálogo</Title>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item'>
                    <Col>
                        <Input
                            placeholder="Pesquisar"
                            style={{
                                width: '85vw',
                                background: 'none',
                            }}
                            suffix={<SearchOutlined />}
                            size="large"
                        />
                    </Col>
                </Row>
                <Row className='container_step'>
                    <Row className='container_item' style={{ alignContent: 'center' }}>
                        <Col> 
                    <img src={favoritas} className="card-catalogo-style"/>
                        </Col>
                        <Col>
                            
                            <Link to='/AZ'>
                            <img src={AZ} className="card-catalogo-style"/>
                            </Link>
                        </Col>
                    </Row>
                  
                </Row>
                <Row className='container_step'>
                    <Row className='container_item' style={{ alignContent: 'center' }}>
                        <Col> 
                        <Link to='/facilCuidado'>
                        <img src={facil} className="card-catalogo-style"/>
                            </Link>
                            </Col>
                            <Col> 
                            <Link to='/Grandes'>
                            <img src={grandes} className="card-catalogo-style"/>
                            </Link>
                        </Col>
                    </Row>
                </Row>
                <MenuComponent />
            </Content>


        </Layout >
    );
};


export default Catalogo;

