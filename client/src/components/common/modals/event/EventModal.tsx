import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

function getActivities(): void {
}

export default function EventModal(props: any) {
    return (
        <Modal className="event-modal" onShow={() => getActivities()}
            {...props}
            // onHide={() => props.toggleActivityModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>Event</h4>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <span>body</span>
            </Modal.Body>

            <Modal.Footer className="activity-sync-modal-footer">
                <span>footer</span>
            </Modal.Footer>
        </Modal>
    );
}