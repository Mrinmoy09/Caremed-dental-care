import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Member from '../Member/Member';

const Members = () => {
    const [members , setMembers] = useState([]);
    useEffect(()=>{
        fetch('/team.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div id="experts">
            <h2 className="text-primary text-center mb-2">MEET OUR DOCTORS</h2>
            <Container>
                <Row className="p-2">
                    {
                        members.map(member => <Member
                        key={member.id}
                        member = {member}
                        ></Member>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Members;