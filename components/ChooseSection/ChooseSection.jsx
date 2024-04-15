import React from'react';
import {Card} from 'react-bootstrap';

function ChooseSection (){
    return (
        <div>
            <div className="container">
                <h2 className='text-center mb-5'>Why Choose Universidad De Manila?</h2>
                <div className='row g-4'>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                                </svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Rewards 
                                </Card.Title>
                                <Card.Text className='text-center'>
                                During the Presentation and Confirmation of Accreditation earlier today, 28 January 2022, ALCUCOA President and Executive Director Dr. Raymundo P. Arcega, CESE personally awarded the Certificates of Accreditation to UDM President Dr. Ma. Felma Carlos-Tria.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                            </svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Quality 
                                </Card.Title>
                                <Card.Text className='text-center'>
                                Aside from giving experience and quality education to their students, the institution's primary goal is to guide them to succeed in the paths they want to pursue. If you're from Manila and have plans on taking a Criminology or Nursing course, you may wish to add Universidad de Manila to your list of options.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z"/>
                            <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z"/>
                            </svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Bookmarks 
                                </Card.Title>
                                <Card.Text className='text-center'>
                                It pioneered in free tertiary education for the underprivileged but deserving youth who did not have the financial capabilities to obtain a college education. UDM was elevated to University status with the passage by the City Council of Ordinance No. 8120 during the administration of Mayor Jose L.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChooseSection;