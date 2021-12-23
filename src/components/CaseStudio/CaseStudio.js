import React from 'react';
import CaseStudioCard from '../Shared/CaseStudioCard/CaseStudioCard';
import './CaseStudio.css'

const CaseStudio = () => {
    return (
        <section className="case-studio-section">
            <div className="heading">
                <h1>NEW CASE STUDIES</h1>
                <h4 className="text-grey">We help our clients renew their business</h4>
            </div>
            <div className="case-studio-container container">
                <CaseStudioCard />
                <CaseStudioCard />
                <CaseStudioCard />
            </div>
        </section>
    );
};

export default CaseStudio;