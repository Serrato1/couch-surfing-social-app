const API_BASE_URL = process.env.PUBLIC_API_BASE_URL || '';

export async function fetchFriends() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/friends`);
    if (!response.ok) {
      return { error: 'Failed to fetch friends', data: null };
    }
    const data = await response.json();
    return { error: null, data: data };
  } catch (error) {
    return { error: error.message, data: null };
  }
}

export async function fetchPosts() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/posts`);
    console.log(res);
    if (!res.ok) {
      return { error: 'Failed to fetch posts', data: null };
    }
    const data = await res.json();
    return { error: null, data };
  } catch (error) {
    return { error: error.message, data: null };
  }
}

export async function fetchUser() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/user`);
    if (!res.ok) {
      return { error: 'Failed to fetch user', data: null };
    }
    const data = await res.json();
    return { error: null, data };
  } catch (error) {
    return { error: error.message, data: null };
  }
}

export async function fetchPost(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/posts?id=${id}`);
    if (!res.ok) {
      return { error: 'Failed to fetch post', data: null };
    }
    const data = await res.json();
    if (!data || data.error) {
      return { error: 'Post not found', data: null };
    }
    return { error: null, data };
  } catch (error) {
    return { error: error.message, data: null };
  }
}