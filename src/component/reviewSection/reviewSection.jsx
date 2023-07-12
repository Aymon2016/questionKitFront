import developerImg from "../../../assets/images.png"
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

const ReviewSection = () => {
    return (
        <MDBContainer className="py-5">
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center">
                    <h3 className="mb-4">Our Team</h3>

                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={developerImg}
                            alt="Team Image"
                            className="rounded-circle shadow-1-strong"
                            width="150"
                            height="150"
                        />
                    </div>
                    <h5 className="mb-3">Maria Smantha</h5>
                    <h6 className="text-primary mb-3">Web Developer</h6>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                        id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                    >
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon
                                fas
                                icon="star-half-alt"
                                size="sm"
                                className="text-warning"
                            />
                        </li>
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={developerImg}
                            alt="Team Image"
                            className="rounded-circle shadow-1-strong"
                            width="150"
                            height="150"
                        />
                    </div>
                    <h5 className="mb-3">Lisa Cudrow</h5>
                    <h6 className="text-primary mb-3">Graphic Designer</h6>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                    >
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={developerImg}
                            alt="Team Image"
                            className="rounded-circle shadow-1-strong"
                            width="150"
                            height="150"
                        />
                    </div>
                    <h5 className="mb-3">John Smith</h5>
                    <h6 className="text-primary mb-3">Marketing Specialist</h6>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti.
                    </p>
                    <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                    >
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon fas icon="star" size="sm" className="text-warning" />
                        </li>
                        <li>
                            <MDBIcon far icon="star" size="sm" className="text-warning" />
                        </li>
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default ReviewSection;