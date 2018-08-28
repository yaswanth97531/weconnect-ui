import React, {Component} from 'react';
import { Layout, Menu, Icon, Tabs } from 'antd';

import './Navigation.css';

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class Nav extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
        <Layout className="home-layout">
          <div class="home-container">
            <div className="hot-posts-container">
              <div class="post1">post1</div>
              <div class="post2">post2</div>
              <div class="post3">post3</div>
            </div>
            <div class="posts-container">
              <div class="recent-posts">
                <p>recent post 1</p>
                <p>recent post 2</p>
                <p>recent post 3</p>
                <p>recent post 4</p>
                <p>recent post 5</p>
                <p>recent post 6</p>
                <p>recent post 7</p>
                <p>recent post 8</p>
                <p>recent post 9</p>
                <p>recent post 10</p>
                <p>recent post 11</p>
                <p>recent post 12</p>
                <p>recent post 13</p>
                <p>recent post 14</p>
                <p>recent post 15</p>
                <p>recent post 16</p>
                <p>recent post 17</p>
                <p>recent post 18</p>
                <p>recent post 1</p>
                <p>recent post 2</p>
                <p>recent post 3</p>
                <p>recent post 4</p>
                <p>recent post 5</p>
                <p>recent post 6</p>
                <p>recent post 7</p>
                <p>recent post 8</p>
                <p>recent post 9</p>
                <p>recent post 10</p>
                <p>recent post 11</p>
                <p>recent post 12</p>
                <p>recent post 13</p>
                <p>recent post 14</p>
                <p>recent post 15</p>
                <p>recent post 16</p>
                <p>recent post 17</p>
                <p>recent post 18</p>
                <p>recent post 1</p>
                <p>recent post 2</p>
                <p>recent post 3</p>
                <p>recent post 4</p>
                <p>recent post 5</p>
                <p>recent post 6</p>
                <p>recent post 7</p>
                <p>recent post 8</p>
                <p>recent post 9</p>
                <p>recent post 10</p>
                <p>recent post 11</p>
                <p>recent post 12</p>
                <p>recent post 13</p>
                <p>recent post 14</p>
                <p>recent post 15</p>
                <p>recent post 16</p>
                <p>recent post 17</p>
                <p>recent post 18</p>
                <p>recent post 1</p>
                <p>recent post 2</p>
                <p>recent post 3</p>
                <p>recent post 4</p>
                <p>recent post 5</p>
                <p>recent post 6</p>
                <p>recent post 7</p>
                <p>recent post 8</p>
                <p>recent post 9</p>
                <p>recent post 10</p>
                <p>recent post 11</p>
                <p>recent post 12</p>
                <p>recent post 13</p>
                <p>recent post 14</p>
                <p>recent post 15</p>
                <p>recent post 16</p>
                <p>recent post 17</p>
                <p>recent post 18</p>
              </div>
              <div class="side-posts">
                <div class="network-posts">
                  <p>Your network post 1</p>
                  <p>Your network post 2</p>
                </div>
                <div class="bookmark-posts">
                  <p>Your bookmark post 1</p>
                  <p>Your bookmark post 2</p>
                  <p>Your bookmark post 3</p>
                  <p>Your bookmark post 4</p>
                  <p>Your bookmark post 5</p>
                  <p>Your bookmark post 6</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
    );
  }
}

export default Nav;