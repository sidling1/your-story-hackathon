-- Create the social networking application database
CREATE DATABASE social_networking_app;

-- Connect to the newly created database
\c social_networking_app;

-- Create the USERS table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    bio TEXT,
    profile_picture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the RESOURCES table
CREATE TABLE resources (
    resource_id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    images TEXT[], -- array of image URLs
    links TEXT[], -- array of resource links
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- DOES EVENTS TABLE REQUIRE user_id ??? and if yes does it require the foreign key attribute
-- I want 2 kinds of events, one personal storage and one global storage
-- Hence global once should show on all peoples events but the personal one should only be shown to selected users as defined by the user
-- Create the EVENTS table
-- Create the EVENTS table
-- Create the EVENTS table
CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL, -- 'personal' or 'global'
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    user_id INT, -- For personal events, store the user ID of the owner
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the EVENT_VISIBILITY table
CREATE TABLE event_visibility (
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- -- Modify needed , include more technical stufffff
-- -- Create the STARTUPS table
-- CREATE TABLE startups (
--     startup_id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL,
--     name VARCHAR(100) NOT NULL,
--     revenue DECIMAL(15, 2),
--     description TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );

-- Create the POSTS table
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    popularity INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create the COMMENTS table
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create the LIKES table
CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create indexes for better performance
CREATE INDEX idx_resources_user_id ON resources(user_id);
CREATE INDEX idx_events_user_id ON events(user_id);
CREATE INDEX idx_startups_user_id ON startups(user_id);
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
CREATE INDEX idx_likes_post_id ON likes(post_id);
CREATE INDEX idx_likes_user_id ON likes(user_id);
