import profileReducer, { actions } from "./profile-reducer";
import React from 'react';
import { render, screen } from '@testing-library/react';

let state = {
    posts: [
        { id: 1, title: 'Hi', body: 'hi!!!' },
        { id: 2, title: 'Hi', body: 'hi!!!' },
        { id: 3, title: 'Hi', body: 'hi!!!' },
    ],
    profile: null,
    status: '',
    pageSize: 10,
    totalPostCount: 0,
    currentPage: 1,
    isFetching: false,
    newPostText: '',
    newTitle: '',
}

test('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('hey')
    
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
});
test('message should be hey', () => {
    // 1. test data
    let action = actions.addPostActionCreator('hey')
    
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    
    expect(newState.posts[2].message).toBe('hey')
});
test('after deleting length of array should be decremented', () => {
    // 1. test data
    let action = actions.deletePost(1)
    
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    
    expect(newState.posts.length).toBe(1)
});
test('after deleting length of array shouldnt be decremented if postId is incorrect', () => {
    // 1. test data
    let action = actions.deletePost(1989)
    
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation 
    
    expect(newState.posts.length).toBe(2)
});



