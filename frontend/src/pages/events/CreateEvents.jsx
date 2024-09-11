import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvent, uploadThumbnail } from '../../api/eventsApi';
import { getOrganizers, getCategories } from '../../api/UserApi';
import AuthenticatedLayout from '../../layout/authticatedLayout';
import { getUserProfile } from '../../api/authApi';
import Header from '../../components/Header';

const CreateEventPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [organizers, setOrganizers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [organizerId, setOrganizerId] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    const userData = await getUserProfile(token);
                    setUser(userData);
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                }

                try {
                    const organizersData = await getOrganizers();
                    setOrganizers(organizersData);
                } catch (error) {
                    console.error('Error fetching organizers:', error);
                }

                try {
                    const categoriesData = await getCategories();
                    setCategories(categoriesData);
                } catch (error) {
                    console.error('Error fetching categories:', error);
                }
            }
        };
        fetchData();
    }, []);

    const handleFileChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user || !user.id) {
            console.error('User is not defined or user ID is missing');
            setErrors((prevErrors) => ({
                ...prevErrors,
                submit: 'User is not authenticated. Please log in again.'
            }));
            return;
        }

        let thumbnailPath = null;
        if (thumbnail) {
            const formData = new FormData();
            formData.append('thumbnail', thumbnail);
            try {
                const response = await uploadThumbnail(formData);
                thumbnailPath = response.data.path; // Assuming the response contains the file path
            } catch (error) {
                console.error('Error uploading thumbnail:', error);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    thumbnail: 'Failed to upload thumbnail. Please try again later.'
                }));
                return;
            }
        }

        const eventData = {
            title,
            date,
            location,
            capacity,
            categoryId,
            description,
            price,
            organizerId,
            creatorId: user.id,
            thumbnail: thumbnailPath,
        };

        try {
            const response = await createEvent(eventData);
            console.log('Server response:', response); // Log the server response for debugging
            if (response.status === 201) {
                navigate('/events/discover');
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error submitting event:', error);
            setErrors((prevErrors) => ({
                ...prevErrors,
                submit: 'Failed to create event. Please try again later.'
            }));
        }
    };

    return (
        <AuthenticatedLayout>
            <Header />
            <div className="container mx-auto py-16 px-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Create Your Event</h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Event Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter event title"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Date & Time</label>
                            <input
                                type="datetime-local"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter event location"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Capacity</label>
                            <input
                                type="number"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                placeholder="Enter event capacity"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            {errors.capacity && <p className="text-red-500 text-sm">{errors.capacity}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Category</label>
                            <select
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                            {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Event Thumbnail</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            {thumbnail && (
                                <img
                                    src={URL.createObjectURL(thumbnail)}
                                    alt="Event Thumbnail"
                                    className="mt-4 w-full h-48 object-cover rounded-md shadow-md"
                                />
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Event Price</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter event price"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe your event"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                rows="5"
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">Organizer</label>
                            <select
                                value={organizerId}
                                onChange={(e) => setOrganizerId(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                            >
                                <option value="">Select an organizer</option>
                                {organizers.map((organizer) => (
                                    <option key={organizer.id} value={organizer.id}>
                                        {organizer.username}
                                    </option>
                                ))}
                            </select>
                            {errors.organizerId && <p className="text-red-500 text-sm">{errors.organizerId}</p>}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-200"
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateEventPage;