import React, { useEffect, useContext } from 'react';
import { Plan } from '../../../store/types';
import { AppContext } from '../../../lib/AppContext';

import fpnImage from '../../../images/fpn';
import './index.scss';

const defaultProductRedirectURL = 'https://mozilla.org';

export type SubscriptionRedirectProps = {
  plan: Plan;
};

export const SubscriptionRedirect = ({
  plan: { product_id, product_name },
}: SubscriptionRedirectProps) => {
  const {
    config: { productRedirectURLs },
    navigateToUrl,
  } = useContext(AppContext);

  const redirectUrl =
    productRedirectURLs[product_id] || defaultProductRedirectURL;

  useEffect(() => {
    navigateToUrl(redirectUrl);
  }, [navigateToUrl, redirectUrl]);

  return (
    <div className="subscription-ready">
      <h2>Your subscription is ready</h2>
      <img alt="Firefox Private Network" src={fpnImage} />
      <p>
        Hang on for a moment while we send you to the{' '}
        <span className="plan-name">{product_name}</span> download page.
      </p>
      <a href={redirectUrl}>
        Click here if you're not automatically redirected
      </a>
    </div>
  );
};

export default SubscriptionRedirect;
