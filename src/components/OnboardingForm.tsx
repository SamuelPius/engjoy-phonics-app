
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, Calendar, Phone, Mail, Home, School, GraduationCap, 
  ChevronRight, ChevronLeft, Check 
} from 'lucide-react';

type FormData = {
  childName: string;
  childAge: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  school: string;
  grade: string;
  courseId?: string;
};

type OnboardingFormProps = {
  selectedCourseId?: string;
  onComplete: (data: FormData) => void;
};

const OnboardingForm = ({ selectedCourseId, onComplete }: OnboardingFormProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    childAge: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    school: '',
    grade: '',
    courseId: selectedCourseId,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };
  
  // Check if current step is valid
  const isStepValid = () => {
    if (step === 1) {
      return formData.childName.trim() !== '' && formData.childAge.trim() !== '';
    } else if (step === 2) {
      return (
        formData.parentName.trim() !== '' && 
        formData.parentPhone.trim() !== '' && 
        formData.parentEmail.trim() !== ''
      );
    } else if (step === 3) {
      return formData.grade.trim() !== '';
    }
    return false;
  };
  
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress indicator */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= i 
                  ? 'bg-phonics-blue text-white' 
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step > i ? <Check className="w-5 h-5" /> : i}
            </div>
            <div className={`text-xs mt-2 ${step >= i ? 'text-phonics-blue' : 'text-gray-400'}`}>
              {i === 1 ? 'Child Info' : i === 2 ? 'Parent Info' : 'School Info'}
            </div>
          </div>
        ))}
      </div>
      
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6 font-comic text-phonics-blue">Child Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Child's Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. Jane Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Child's Age</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="Age in years"
                    min="1"
                    max="12"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6 font-comic text-phonics-blue">Parent Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Parent/Guardian Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. John Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. parent@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Address (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Home className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. 123 Main St, City"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6 font-comic text-phonics-blue">School Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">School Name (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <School className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. ABC Elementary School"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Grade/Class</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="phonics-input pl-10 border-phonics-blue/30 focus:border-phonics-blue focus:ring-phonics-blue/30"
                    placeholder="e.g. 2nd Grade / Class 2"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center phonics-button bg-gray-100 text-gray-700"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </button>
          
          <button
            type="button"
            onClick={nextStep}
            disabled={!isStepValid()}
            className={`flex items-center phonics-button ${
              isStepValid() 
                ? 'bg-phonics-blue text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {step === 3 ? 'Complete' : 'Next'}
            {step !== 3 && <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingForm;
