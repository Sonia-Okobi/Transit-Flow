import React from 'react';
import liquid from '../../../../../assets/images/liquid.png';
import packaging from '../../../../../assets/images/packaging.png';
import contract from '../../../../../assets/images/contract.png';
import warehouse from '../../../../../assets/images/warehouse.png';
import specialized from '../../../../../assets/images/specialized.png';
import TransportMethod from './TransportMethod';
import BaseButton from '../../../../ui/button/BaseButton';
import './index.scss';

export default function HomeTransporting() {
  return (
    <div className="home-transporting">
      <div className="home-transporting__content">
        <h3 className="home-transporting__content__header">
          Transporting Across The World
        </h3>
        <div className="home-transporting__content__transport-method">
          <TransportMethod
            image={liquid}
            type="Liquid Transportation"
            method="Premium Tankers"
          />
          <TransportMethod
            image={packaging}
            type="Packaging Solutions"
            method="Warehouse Management"
          />
          <TransportMethod
            image={contract}
            type="Contract Logistics"
            method="Road Transportation"
          />
          <TransportMethod
            image={warehouse}
            type="Warehouse & Distribution"
            method="Large Warehouse"
          />
          <TransportMethod
            image={specialized}
            type="Specialized Transport"
            method="Ocean Transports"
          />
        </div>
        <BaseButton variant="secondary" className='home-transporting__content__button'>More Work</BaseButton>
      </div>
    </div>
  );
}
