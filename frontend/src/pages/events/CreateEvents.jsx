import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import AuthenticatedLayout from '../../layout/authticatedLayout';
import { getOrganizers, getCategories } from '../../api/UserApi';
import { createEvent } from '../../api/eventsApi';
import { getUserProfile } from '../../api/authApi';

const CreateEventPage = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [organizerId, setOrganizerId] = useState('');
    const [organizers, setOrganizers] = useState([]);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                console.error('No auth token found');
                return;
            }

            try {
                const userData = await getUserProfile(token);
                if (!userData || !userData.id) {
                    throw new Error('Invalid user data received');
                }
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
        };

        fetchData();
    }, []);

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnail(file);
        }
    };

    useEffect(() => {
        return () => {
            if (thumbnail) {
                URL.revokeObjectURL(thumbnail);
            }
        };
    }, [thumbnail]);

    const validateTitle = () => {
        if (!title) return 'Title is required';
        return '';
    };

    const validateDate = () => {
        if (!date) return 'Date is required';
        return '';
    };

    const validateLocation = () => {
        if (!location) return 'Location is required';
        return '';
    };

    const validateDescription = () => {
        if (!description) return 'Description is required';
        return '';
    };

    const validateOrganizerId = () => {
        if (!organizerId) return 'Organizer is required';
        return '';
    };

    const validatePrice = () => {
        if (!price) return 'Price is required';
        return '';
    };

    const validateForm = () => {
        const newErrors = {};
        newErrors.title = validateTitle();
        newErrors.date = validateDate();
        newErrors.location = validateLocation();
        newErrors.description = validateDescription();
        newErrors.organizerId = validateOrganizerId();
        newErrors.price = validatePrice();

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (!user || !user.id) {
            console.error('User is not defined or user ID is missing');
            return;
        }

        const eventData = {
            title,
            description,
            date,
            location,
            capacity,
            categoryId,
            organizerId,
            price,
            creatorId: user.id,
            thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : null, // Convert thumbnail to URL if available
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
                                onChange={handleThumbnailChange}
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