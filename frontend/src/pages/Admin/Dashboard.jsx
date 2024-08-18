import { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import Annoucement from './Announcement';
import Performance from './Performance';

import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  Card,
  CardTitle,
  CardContainer,
  CardContent,
} from '../../styles/DashboardStyles';
const AdminDashboard = () => {
  return (
    <>
      <AdminDashboardContainer>
        <Content>
          <TopContent>
            <Section>
              <SectionTitle>Overview</SectionTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Total Students</CardTitle>
                  <CardContent>500</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total eacher</CardTitle>
                  <CardContent>50</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total Classess</CardTitle>
                  <CardContent>20</CardContent>
                </Card>
              </CardContainer>
            </Section>
            <Section>
              <SectionTitle>All Events</SectionTitle>
            </Section>
          </TopContent>

          <BottomContent>
            <Performance />
            <Annoucement />
          </BottomContent>
        </Content>
      </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
