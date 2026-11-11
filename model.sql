
CREATE TABLE plant_owners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    street VARCHAR(100),
    house_number VARCHAR(10),
    postal_code VARCHAR(10),
    city VARCHAR(100),
    phone VARCHAR(30),
    email VARCHAR(255)
);

CREATE TABLE plant_operators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    street VARCHAR(100),
    house_number VARCHAR(10),
    postal_code VARCHAR(10),
    city VARCHAR(100),
    phone VARCHAR(30),
    email VARCHAR(255)
);

CREATE TABLE installers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name VARCHAR(150),
    city VARCHAR(100),
    registration_number VARCHAR(100)
);

CREATE TABLE plant_addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    street VARCHAR(100),
    house_number VARCHAR(10),
    postal_code VARCHAR(10),
    city VARCHAR(100),
    phone VARCHAR(30),
    email VARCHAR(255)
);

CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES plant_owners(id),
    operator_id UUID REFERENCES plant_operators(id),
    installer_id UUID REFERENCES installers(id),
    plant_address_id UUID REFERENCES plant_addresses(id),
    system_type VARCHAR(30),
    grid_application_attached BOOLEAN,
    site_plan_attached BOOLEAN,
    data_sheet_attached BOOLEAN,
    unit_certificate_available BOOLEAN,
    na_certificate_attached BOOLEAN,
    power_flow_certificate_attached BOOLEAN,
    circuit_diagram_attached BOOLEAN,
    planned_commissioning_date DATE
);
