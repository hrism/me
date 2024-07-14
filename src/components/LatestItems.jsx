import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Placeholder } from 'react-bootstrap';
import { RiArticleFill } from "react-icons/ri";
import { MdNoteAdd } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';


const LatestItems = () => {
    const [allItems, setAllItems] = useState([]);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
        return new Intl.DateTimeFormat('ja-JP', options).format(date);
    };

    const fetchRSSFeeds = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://8jzw1zwz10.execute-api.ap-southeast-2.amazonaws.com/default/rss');
            const data = response.data;

            if (Array.isArray(data) && data.length > 0) {
                const fetchedItems = data.flatMap(feed =>
                    feed.items.map(item => ({
                        title: item.title,
                        link: item.link || '#',
                        pubDate: new Date(item.pubDate),
                        image: item.image || 'https://via.placeholder.com/1200x630?text=No+Image',
                        blogTitle: feed.blogTitle || 'Unknown Blog',
                    }))
                );

                // 日付順にソート
                fetchedItems.sort((a, b) => b.pubDate - a.pubDate);
                setAllItems(fetchedItems);
                setItems(fetchedItems.slice(0, itemsPerPage));
            } else {
                setError('Invalid RSS feed structure');
            }
        } catch (error) {
            setError(`Error fetching RSS feeds: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreItems = () => {
        setPage(prevPage => {
            const newPage = prevPage + 1;
            const newItems = allItems.slice(0, newPage * itemsPerPage);
            setItems(newItems);
            return newPage;
        });
    };

    useEffect(() => {
        fetchRSSFeeds();
    }, []);

    const renderPlaceholder = () => (
        <Row>
            {Array.from({ length: itemsPerPage }).map((_, index) => (
                <Col key={index} md={3} className="mb-4">
                    <Card>
                        <Placeholder as={Card.Img} variant="top" style={{ height: '160px' }} />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={12} />
                                <Placeholder xs={8} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );

    if (error) return <p>{error}</p>;

    return (
        <>
            <style>
                {`
                    .card-title {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: calc(1.2em * 3);
                    }
                `}
            </style>
            <Container className="py-5">
                <Row>
                    <Stack direction="horizontal" gap={2} className="mt-2 mb-4 ps-3">
                        <RiArticleFill className="text-primary fs-5"/>
                        <h2 className="fs-5 mb-0">最新記事</h2>
                    </Stack>
                </Row>
                <Row>
                    {items.map((item, index) => (
                        <Col key={index} md={3} className="mb-4">
                            <Card>
                                {item.image ? (
                                    <Card.Img variant="top" src={item.image} style={{ height: '160px', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ backgroundColor: 'gray', height: '160px' }} />
                                )}
                                <Card.Body>
                                    <Card.Text className="mb-2 text-muted small">
                                        {formatDate(item.pubDate)} {/* ここで日付をフォーマットして表示 */}
                                    </Card.Text>
                                    <Card.Title className="fs-6">{item.title}</Card.Title>
                                    <Card.Subtitle className="my-3 text-muted small">{item.blogTitle}</Card.Subtitle>
                                    <a href={item.link} className="btn btn-outline-dark btn-sm w-100" target="_blank" rel="noopener noreferrer">記事を読む</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {loading && renderPlaceholder()}
                {!loading && items.length < allItems.length && (
                    <div className="text-center">
                        <Button onClick={loadMoreItems} variant="dark px-5 align-items-center d-flex gap-2 mx-auto fs-6"><MdNoteAdd/>さらに記事を表示する</Button>
                    </div>
                )}
            </Container>
        </>
    );
};

export default LatestItems;
