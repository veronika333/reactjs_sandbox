import React, { Component } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <DesktopNavbar />
            </div>
        )
    }
}
