import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class EventDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="float-left" caret>
          Event Tags
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem onClick={() => this.props.loadEvents()}>All Events</DropdownItem>
        <DropdownItem onClick={() => this.props.eventTag("UWC")}>UWC</DropdownItem>
          <DropdownItem onClick={() => this.props.eventTag("Trips")}>Trips</DropdownItem>
          <DropdownItem onClick={() => this.props.eventTag("Race")}>Race</DropdownItem>
          <DropdownItem onClick={() => this.props.eventTag("Release")}>Release</DropdownItem>
          <DropdownItem onClick={() => this.props.eventTag("Meeting")}>Meeting</DropdownItem>
          <DropdownItem onClick={() => this.props.eventTag("Pool")}>Pool</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}