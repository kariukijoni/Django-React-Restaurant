import React from 'react'

function Dashboard() {
    return (
        <div className="page-wrapper">
             <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Dashboard</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-cyan text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard"></i></h1>
                                <h6 className="text-white">Dashboard</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-success text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-chart-areaspline"></i></h1>
                                <h6 className="text-white">Charts</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-warning text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-collage"></i></h1>
                                <h6 className="text-white">Widgets</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-danger text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-border-outside"></i></h1>
                                <h6 className="text-white">Tables</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-info text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-arrow-all"></i></h1>
                                <h6 className="text-white">Full Width</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-danger text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-receipt"></i></h1>
                                <h6 className="text-white">Forms</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-info text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-relative-scale"></i></h1>
                                <h6 className="text-white">Buttons</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-cyan text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-pencil"></i></h1>
                                <h6 className="text-white">Elements</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-success text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-calendar-check"></i></h1>
                                <h6 className="text-white">Calnedar</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xlg-3">
                        <div className="card card-hover">
                            <div className="box bg-warning text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-alert"></i></h1>
                                <h6 className="text-white">Errors</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center">
                All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
            </footer>
        </div>
    )
}

export default Dashboard
