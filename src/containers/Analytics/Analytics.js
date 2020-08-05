import React from 'react';
import { getGAData } from 'services/API';
import PropTypes from 'prop-types';
import * as Styles from './style';

var auth2;
export default class Analytics extends React.Component {
  componentDidMount = async () => {
    console.log('**** Analytics did mount ****');
    const body = {
      reportRequests: [
        {
          viewId: '216052261',
          dateRanges: [
            {
              startDate: '2020-04-23',
              endDate: '2020-05-05'
            }
          ],
          dimensions: [
            { name: 'ga:country' }
          ],
          metrics: [
            {
              expression: 'ga:users'
            },
            {
              expression: 'ga:sessions'
            },
            {
              expression: 'ga:sessionDuration'
            },
            {
              expression: 'ga:pageviews'
            }
          ]
        }
      ]
    }
    const gaResponse = await getGAData(body);
    // this.initClient();
  }

  //   /**
  //  * Initializes the Sign-In client.
  //  */
  //   initClient = () => {
  //     gapi.load('auth2', () => {
  //       /**
  //        * Retrieve the singleton for the GoogleAuth library and set up the
  //        * client.
  //        */
  //       auth2 = gapi.auth2.init({
  //         client_id: '1023954268227-pho36uu1pp1qd3cab0813scegs91hgft.apps.googleusercontent.com'
  //       });

  //       console.log('### initClient ###', auth2);
  //       if (auth2) {
  //         this.getGA();
  //       }

  //       // // Attach the click handler to the sign-in button
  //       // auth2.attachClickHandler('signin-button', {}, (user) => {
  //       //   console.log('Signed in as ' + user.getBasicProfile().getName());
  //       // },
  //       // (error) => {
  //       //   console.log(error);
  //       // });
  //     });
  //   };

  //   /**
  //  * Handle successful sign-ins.
  //  */
  //   onSuccess = (user) => {
  //     console.log('Signed in as ' + user.getBasicProfile().getName());
  //   };

  //   /**
  //   * Handle sign-in failures.
  //   */
  //   onFailure = (error) => {
  //     console.log(error);
  //   };

  //   getGA = () => {
  //     var VIEW_ID = '216052261';

  //     gapi.client.request({
  //       path: '/v4/reports:batchGet',
  //       root: 'https://analyticsreporting.googleapis.com/',
  //       method: 'POST',
  //       body: {
  //         reportRequests: [
  //           {
  //             viewId: VIEW_ID,
  //             dateRanges: [
  //               {
  //                 startDate: '2020-04-23',
  //                 endDate: '2020-05-05'
  //               }
  //             ],
  //             dimensions: [
  //               { name: 'ga:country' }
  //             ],
  //             metrics: [
  //               {
  //                 expression: 'ga:users'
  //               },
  //               {
  //                 expression: 'ga:sessions'
  //               },
  //               {
  //                 expression: 'ga:sessionDuration'
  //               },
  //               {
  //                 expression: 'ga:pageviews'
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     }).then((response) => {
  //       console.log('************ GET GA ************', response);
  //     }, console.error.bind(console));
  //   }

  render() {
    return (
      <React.Fragment>
        GA
      </React.Fragment>
    );
  }
}
