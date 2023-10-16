import card1 from "../images/Browsecard/course-react.jpg"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    // Button
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { FaCalendarMinus } from "react-icons/fa";

function Browsecards() {
    return (
        <>
            {/* // .................section1................. */}
            <section className="p-0 sm:p-0 md:p-10 lg:p-2" >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-2 h-auto    ">
                    {/* card1 */}
                    <div className="p-5 w-auto "
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35  shadow-lg hover:shadow-gray-500 ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>


                    {/* card2 */}
                    <div className="p-5 w-auto"
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35   shadow-lg hover:shadow-gray-500  ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>



                    {/* card3 */}
                    <div className="p-5 w-auto"
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35  shadow-lg hover:shadow-gray-500  ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>

                </div>
            </section>

              {/* section2  */}
            <section className="p-0 sm:p-0 md:p-10 lg:p-3" >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-2 h-auto    ">
                    {/* card1 */}
                    <div className="p-5 w-auto  "
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35  shadow-lg hover:shadow-gray-500 ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>


                    {/* card2 */}
                    <div className="p-5 w-auto"
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35   shadow-lg hover:shadow-gray-500  ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>



                    {/* card3 */}
                    <div className="p-5 w-auto"
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35  shadow-lg hover:shadow-gray-500  ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>

                </div>
            </section>


             {/* section3 */}
            <section className="p-0 sm:p-0 md:p-10 lg:p-3" >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-2 h-auto    ">
                    {/* card1 */}
                    <div className="p-5 w-auto  "
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35  shadow-lg hover:shadow-gray-500 ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>


                    {/* card2 */}
                    <div className="p-5 w-auto"
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35   shadow-lg hover:shadow-gray-500  ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>


                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>



                    {/* card3 */}
                    <div className="p-5 w-auto"
                     data-aos="zoom-in"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                        <Card className="mt-6 w-35  shadow-lg hover:shadow-gray-500  ">
                            <CardHeader color="blue-gray" className="relative h-53">
                                <img src={card1} />
                            </CardHeader>
                            <CardBody className="p-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                                    How to easily create  Website With React
                                </Typography>
                                <Typography className=" flex">
                                    <FaCalendarMinus className="m-1 " /> 3h 56m   &nbsp; Beginner
                                </Typography>
                            </CardBody>
                            <div className="5 flex items-center gap-0 mt-2">
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <StarIcon className="h-5 w-5 text-yellow-700" />
                                <Typography className="text-yellow-700">
                                    &nbsp; 4.5
                                </Typography>
                                <Typography className="text-black-700">
                                    &nbsp; (7,700)
                                </Typography>
                            </div>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex items-left -space-x-3 mt-3 mb-3">
                                    <Tooltip content="Natali Craig">
                                        <Avatar
                                            size="sm"
                                            variant="circular"
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                            className="border-2 border-white hover:z-10"
                                        />
                                    </Tooltip>
                                    <Typography className="font-normal m-1">&nbsp; &nbsp;Morris Mccoy</Typography>
                                </div>
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </CardFooter>
                        </Card >
                    </div>

                </div>
            </section>

        </>


    );
}
export default Browsecards;






