import { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome';
import Boxcheck from './layouts/Boxcheck';
import Category from './layouts/Category';
import Upload from './layouts/Upload';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

    // * hiển thị Popup xác nhận chọn file
    const [checkChangeFile, setCheckChangeFile] = useState(false)
    // * Lấy Tên file
    const [getName, setGetName] = useState("")
    // * Lấy file
    const [getFile, setGetFile] = useState()
    // * Chuyển trang
    const [active, setActive] = useState(true)
    // * Get date
    const [getDates, setGetDates] = useState('')

    // * Clean up
    useEffect(() => {
        return () => {
            getFile && URL.revokeObjectURL(getFile.preview)
        }
    }, [getFile])


    // * Lấy file + tên file
    const handlePreviewFile = (e) => {
        const file = e.target.files[0]

        setGetFile(URL.createObjectURL(file))
        setGetName(file.name)
        setCheckChangeFile(true)
    }

    // * Đóng Popup
    const handleCloseBox = () => setCheckChangeFile(false)

    const handleShowUpload = (e) => {
        e.preventDefault();
        setActive(true)
    };

    const handleShowCate = (e) => {
        e.preventDefault();
        // * Get date
        const getDate = new Date()
        const getCurrMonth = getDate.getMonth() + 1
        const getCurrDay = getDate.getDate()
        const getCurrYear = getDate.getFullYear()

        const getCurrDate = `${getCurrDay}/${getCurrMonth}/${getCurrYear}`
        setGetDates((prev) => [...prev, getCurrDate])

        const resolveAfterSend = new Promise((resolve, reject) => {
            // * POST API
            axios.post('https://62ee32a7c1ef25f3da8476d1.mockapi.io/apitest', {
                id: Math.random(),
                name: getName,
                file: getFile,
                time: getCurrDate
            })
                .then(function (response) {
                    setTimeout(resolve, 3000);
                })
                .catch(function (error) {
                    console.log(error);
                    setTimeout(reject, 3000);
                });
        })
        toast.promise(resolveAfterSend, {
            pending: "Dữ liệu đang được xử lý",
            success: "Dữ liệu đã được xử lý thành công",
            error: "Không thể xử lý dữ liệu",
        })

        // * Chuyển trang đóng Popup
        handleCloseBox()
        setTimeout(() => {
            setActive(false)
        }, 5000)
    };

    return (
        <div className='wrapper'>
            <HeaderHome handleShowUpload={handleShowUpload} text='Đăng xuất' to='/login' toHome='/' />

            {active ? <Upload handlePreviewFile={handlePreviewFile} />
                : <Category getName={getName} getDates={getDates} getFile={getFile} />}

            {/* Show box check */}
            {checkChangeFile ? <Boxcheck
                getName={getName}
                getFile={getFile}
                handleShowCate={handleShowCate}
                handleCloseBox={handleCloseBox}
            /> : false}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </div>
    );
}

export default Home;
