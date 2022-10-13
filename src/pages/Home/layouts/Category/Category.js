import { useEffect, useState } from 'react';
import HeaderCate from './components/HeaderCate';
import images from '../../../../assets/images';

import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ChatIcon from '@mui/icons-material/Chat';

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../../../../setupChatbot/config';
import ActionProvider from '../../../../setupChatbot/ActionProvider';
import MessageParser from '../../../../setupChatbot/MessageParser';

import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import axios from 'axios';
const cx = classNames.bind(styles);

function Category({ getName }) {

    const [showBot, setShowBot] = useState(false)

    const [data, setData] = useState([])
    const [getTitle, setGetTitle] = useState('')
    const [firstTitle, setFirstTitle] = useState(true)

    //* Call API
    useEffect(() => {
        axios.get('https://62ee32a7c1ef25f3da8476d1.mockapi.io/apitest')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [data])


    return (
        <div className={cx('wrapper')}>
            <Grid container columns={12} className={cx('container')}>
                <Grid className={cx('item')} item lg={4.4} md={4.4} sm={5.8} xs={12}>
                    {/* Header */}
                    <HeaderCate
                        logo={images.wordLogo}
                        title={firstTitle ? getName : getTitle}
                        closeIcon={<CloseIcon className={cx('close-icon')} />}
                    />
                    {/* Chưa gắn API vào src */}
                    <div className={cx('body')}>
                        <img src="https://o.vdoc.vn/data/image/2016/10/27/don-khieu-nai-quyet-dinh-hanh-chinh.jpg" alt='Đơn khiếu nại' />
                    </div>
                    <div className={cx('carousel-wrapper')}>
                        <KeyboardDoubleArrowLeftIcon className={cx('carousel-icon')} />
                        <span>1</span>
                        <KeyboardDoubleArrowRightIcon className={cx('carousel-icon')} />
                    </div>
                </Grid>

                <Grid className={cx('item', 'mid-item')} item lg={5.6} md={5.6} sm={5.8} xs={12}>
                    <HeaderCate logo={images.file} title='Đơn thư khiếu nại, tố cáo' closeIcon={null} />
                    <div className={cx('body')}>
                    </div>
                </Grid>

                <Grid className={cx('item')} item lg={1.7} md={1.7} sm={12} xs={12}>
                    <HeaderCate logo={images.history} title='Lịch sử' closeIcon={null} />

                    {/* History */}
                    <div className={cx('wrapper-history')}>
                        {data.map((result) => (
                            <div className={cx('container-history')} onClick={() => {
                                setFirstTitle(false)
                                // *Get name
                                setGetTitle(result.name)
                            }}>
                                <h2>Đơn khiếu nại tố cáo</h2>
                                <p key={result.id}>{result.time}</p>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>

            {/* Chat Bot */}
            <div className={cx('chatbot-wrapper')}>
                {showBot && (
                    <div className={cx('chatbot')}>
                        <Chatbot
                            actionProvider={ActionProvider}
                            messageParser={MessageParser}
                            config={config}
                            headerText='Trò chuyện cùng Trợ lí ảo luật sư bot'
                            placeholderText='Nhập tin nhắn'
                            // messageHistory={loadMessages()}
                            // saveMessages={saveMessages}
                            // validator={validateInput}
                            runInitialMessagesWithHistory
                            disableScrollToBottom
                        />
                    </div>
                )}
                <button className={cx('chat-btn')} onClick={() => setShowBot((prev) => !prev)}>
                    <ChatIcon className={cx('chat-icon')} />
                </button>
            </div>
        </div>
    );
}

export default Category;
