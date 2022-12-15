import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Google Play developers</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section>
            <Section style={headerBlue}>
              <Img
                src="https://www.gstatic.com/gumdrop/files/google-play-developers-header-blue-transparent-w610px-h56px-2x.png"
                width="305"
                height="28"
                alt="Google Play developers header blue trasnparent"
              />
            </Section>
            <Section style={sectionLogo}>
              <Img
                src="https://services.google.com/fh/files/emails/newplaylogo.png"
                width="155"
                height="31"
                alt="Google Play"
              />
            </Section>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>DEVELOPER UPDATE</Text>
            <Text style={paragraph}>Hello Google Play Developer,</Text>
            <Text style={paragraph}>
              We strive to make Google Play a safe and trusted experience for
              users.
            </Text>
            <Text style={paragraph}>
              We've added clarifications to our{' '}
              <Link
                href="https://notifications.google.com/g/p/AM0OverpvihlDsOqz8vaI79uRKwWvuUBonI41A_zVBavOz4JTxQtjN03DDuMj1t40T7XYXb79vTML2PPOAXf5-F6HTIXsTi6ojPzkFYbaHhMST6PZV-Pg_a3Jjg_Src0f606qubBVMsc1KxVToQxZ_HRKtIxLZdPvdilZQI0KugomlDIBzZJd33bzoHv3ZkKbuGQUEsdG0Lgq1AOyStDmra6OAwZq4mMRezfLWAhOsL37KrGzCFbnUdy"
                style={link}
              >
                Target API Level policy
              </Link>
              . Because this is a clarification, our enforcement standards and
              practices for this policy remain the same.
            </Text>
            <Section style={paragraphList}>
              <Text style={paragraph}>
                We’re noting exceptions to the{' '}
                <Link
                  href="https://notifications.google.com/g/p/AM0OverpvihlDsOqz8vaI79uRKwWvuUBonI41A_zVBavOz4JTxQtjN03DDuMj1t40T7XYXb79vTML2PPOAXf5-F6HTIXsTi6ojPzkFYbaHhMST6PZV-Pg_a3Jjg_Src0f606qubBVMsc1KxVToQxZ_HRKtIxLZdPvdilZQI0KugomlDIBzZJd33bzoHv3ZkKbuGQUEsdG0Lgq1AOyStDmra6OAwZq4mMRezfLWAhOsL37KrGzCFbnUdy"
                  style={link}
                >
                  Target API Level policy
                </Link>
                , which can be found in our updated{' '}
                <Link
                  href="https://notifications.google.com/g/p/AM0OvepcsdA5eQbtqe-LZ7mm0z0WnxuCsyt5D2y9tnHJyD8O2HXrCFzj1LUTTL-jYmRqNwpyU6eV1FQzOWFKtsBpMYyUepDjsCKGuXpE8FJ__V_SuKbofNjkXFohAm6VRqfzvgJGtBvMZldoMHToaVgHCEfSAG9tBApkghKtKt5EY923v-isPlUEnShTRCos8H7B2cyNqGd77n7_fDA7Y6cYNfxf0U791BAR-d5zY12XtfrpFyJqfDP-"
                  style={link}
                >
                  Help Center article.
                </Link>
                These exceptions include permanently private apps and apps that
                target automotive or wearables form factors and are bundled
                within the same package.{' '}
                <Link
                  href="https://notifications.google.com/g/p/AM0OveqJsOvgMD-CQdVK8b4RuGFp0OAbSGl6XVPzsgqEEQhPoIw5DxdrfyrkzscQld7RiDM7h93TSDv8HeHAtoTjOQ2WGG4iWchYUlCL3Kw9cCwc1VL9mPfFleiCxsXnR4H44rflA4bfOryODlWNmqVyKXEXNppRCI54qYitf0AVdD4GIjbRn7QI2vcM7ZT8PtCjQspIxFDyCFceRSA7YH8NV3oxhbMOMzK9OCvDEdn3tJwCFjYtJsSLKRWLs2QDnwDFv_g"
                  style={link}
                >
                  Learn more
                </Link>
              </Text>
            </Section>
            <Text style={paragraph}>
              We’re also extending the deadline to give you more time to adjust
              to these changes. Now, apps that target API level 29 or below will
              start experiencing reduced distribution starting{' '}
              <b>Jan 31, 2023</b> instead of Nov 1, 2022. If you need more time
              to update your app, you can request an extension to keep your app
              discoverable to all users until May 1, 2023.
            </Text>
            <Hr style={hr} />
          </Section>

          <Section style={paragraphContent}>
            <Text style={paragraph}>Thank you,</Text>
            <Text style={{ ...paragraph, fontSize: '20px' }}>
              The Google Play team
            </Text>
          </Section>

          <Section style={containerContact}>
            <Section
              style={{
                padding: '20px 20px',
              }}
            >
              <Text style={paragraph}>Connect with us</Text>
              <table>
                <tr>
                  <td>
                    <Link href="https://notifications.google.com/g/p/AM0OveqzgB92ngXkTIclCwVlLsapmS8xcmtSSFsikLtqPwKYmbEr_W_rT4kJSSbe27yQAUsey9Y2oZmOpdaREnkbgdXm-fAxQr3fowGi9YDqdO1b3upiZuR6CanCTnzP1xTZAkn8Ccbb0nY0PLpm3Rf_EsciZ_q8QqJfE3bFaSIBdWD41Fvt59Dsu8jJp2OXsdrKcjDhvTI5VygGN9cF_35RYGcK_Z4Ba6RzggyEblDxykefE_WGjx-eZzf0-8JpRAb_ajhkacKRJb7zD3luiStxDbDMFTRMUO_S2qKZOLr3xv84URlee621cjNKpgKsN3Fp-R0pRFR52g3ut7C4KZ1v9OF7hLk4ui_fnH5rtgdGg7NDYd0ble6fe1tSr78aiDHFvtuaOb8JdR3lB1fqTQ">
                      <Img
                        width="28"
                        height="28"
                        src="https://services.google.com/fh/files/emails/chatt.png"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link href="https://notifications.google.com/g/p/AM0OveqdPsu0xZyEOxSgm8SXeG8V7ry3Y-0e-k9IszkxWlFn6Jq5jx5cen7sR3MtK69Wol6e6xkybgkEmRsUcweqbXpCd9xT0buGvDRkIhXSOctCNzDKTGvYxrx6iJ5darszihHhTLopWMl0-BwTDEoyXsCTqQTUtFRFzzIPG-APMxIAipe2EBRiIl0S8BtrUn5UJ1H_XoCT">
                      <Img
                        width="28"
                        height="28"
                        src="https://www.gstatic.com/gumdrop/files/google-play-developers-pl-transparent-w60px-h60px-2x.png"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link href="https://notifications.google.com/g/p/AM0OveqdXP1hCwl0k53JybNOrDhJgAH3FGR-ndoYUxBbVg9OnEWCoBZb2GLRlOdnkEk3bft1bxE-NzGsnLanPviVtqYquG1FTyffeYDGBsLYyNjRTdgsu7uGVPT3fPYprhIXEhf_ycSXd7fBCN-xR3NlLCRJH4B42X9cEM-185hjHrizBBuHwZLhoYfMmfFe-iSeoI2LwemE5RuCY5cn_a2Dd6jgrANrG3Izl7x6wmD76bCnIwwcSu-mI2RxgD-T-Nm4BCyBIewRqI4bccmOnKA">
                      <Img
                        width="28"
                        height="28"
                        src="https://www.gstatic.com/gumdrop/files/google-play-developers-academy-logo-transparent-w56px-h56px-2x.png"
                      />
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>
            <Img
              width="540"
              height="48"
              src="https://www.gstatic.com/gumdrop/files/google-play-developers-footer-bar-transparent-w1200px-h110px-2x.png"
            />
          </Section>

          <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                textAlign: 'center',
                margin: 0,
              }}
            >
              © 2022 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA
              94043, USA
            </Text>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                textAlign: 'center',
                margin: 0,
              }}
            >
              You have received this mandatory email service announcement to
              update you about important changes to your Google Play Developer
              account.
            </Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: '#dbddde',
};

const sectionLogo = {
  padding: '0 40px',
};

const headerBlue = {
  display: 'flex',
  justifyContent: 'end',
  marginTop: -1,
  marginRight: -2,
  overflow: 'hidden',
};

const container = {
  margin: '30px auto',
  width: '610px',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
};

const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  marginBottom: 20,
};

const heading = {
  fontFamily,
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
};

const paragraphContent = {
  padding: '0 40px',
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontFamily,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
};

const link = {
  ...paragraph,
  color: '#004dcf',
};

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
};
